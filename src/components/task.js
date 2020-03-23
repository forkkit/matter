import React, { useState, useRef } from 'react';
import styled from '@emotion/styled'
import ToggleButton from './toggle-button'
import SvgCheck from '../icons/check';
import IconButton from './icon-button';
import SvgCross from '../icons/cross';

const TaskWrapper = styled.li`
  display: flex;
  align-items: center;
  min-height: calc(var(--maxDotSize) + 0.5rem);
  border-bottom: 1px solid var(--border);
  position: relative;
  background-color: var(--background);
  ${props => props.isVisible && 'display: none'};
  ${props => props.editorIsOpen ? 'z-index: 11' : 'z-index: 0'};
  ${props => props.editorIsOpen && `
    box-shadow: calc(50rem * -1 + 1rem*2) 0 var(--background), calc(50rem - 1rem*2) 0 var(--background);
  `};
`

const TaskBackdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: var(--backdrop);
  top: 0;
  left: 0;
  z-index: 10;
`

const TitleSection = styled.div`
`

const Title = styled.button`
  font: inherit;
  font-size: var(--text-xl);
  color: inherit;
  border: none;
  cursor: text;
  padding: 0;
  font-family: Marr Sans Web;
  background-color: transparent;
`

const PriorityDotWrapper = styled.button`
  width: var(--maxDotSize);
  height: var(--maxDotSize);
  border-radius: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dot = styled.div`
  width: var(--dotSize);
  height: var(--dotSize);
  border-radius: 100%;
  background-color: var(--accent);
  cursor: pointer;
`

const PriorityDotSection = styled.div`
  width: var(--maxDotSize);
  height: var(--maxDotSize);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  left: calc(var(--maxDotSize) * -1 - 1rem);
`

const TitleInput = styled.input`
  font: inherit;
  font-size: var(--text-xl);
  color: inherit;
  border: none;
  padding: 1px 0 0 0;
  flex-grow: 1;
  font-family: Marr Sans Web;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

const TitleForm = styled.div`
  display: flex;
  align-items: center;
  ${props => props.isVisible ? '' : `
    opacity: 0;
    position: absolute;
    left: -100vw;
    width: 0;
    height: 0`
  };
`

const PriorityForm = styled.div`
  display: flex;
  min-height: 22px;
  align-items: center;
  ${props => props.isVisible ? '' : `
    opacity: 0;
    position: absolute;
    left: -100vw;
    width: 0;
    height: 0`
  };

  .ToggleButton {
    margin-left: auto;
  }
`

const PrioritySliderWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 18px);
    height: 2px;
    background-image: linear-gradient(90deg, var(--body), var(--body) 90%, transparent 90%, transparent 100%);
    background-size: 11.1111% 1px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 2px;
    z-index: -1;
  }
`

const PrioritySlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 22px;
  border-radius: 0px;
  background: none;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%; 
    background: var(--body);
    cursor: pointer;
    top: 3px;
    position: relative;
  }

  &::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--body);
    cursor: pointer;
    top: 3px;
    position: relative;
  }

  &:focus::-webkit-slider-thumb {
    box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 4px var(--background);
  }
  &:focus::-moz-range-thumb {
    box-shadow: inset 0 0 0 2px var(--accent), inset 0 0 0 4px var(--background);
  }
`

const FormSection = styled.div`
  flex-grow: 1;
`

const TaskActionsSection = styled.div`
  display: flex;

  .IconButton + .IconButton {
    margin-left: 0.5rem;
  }
`

const PriorityDot = ({ prority, onClick }) => {
  return (
    <PriorityDotWrapper onClick={onClick}>
      <Dot prority={prority} style={{ '--dotSize' : `${prority / 2}rem` }}/>
    </PriorityDotWrapper>
  )
}

const Task = ({ task, titleInputOnChange, priorityInputOnChange, completeOnCLick, deleteOnCLick, isVisible }) => {
  const [titleEditorIsOpen, setTitleEditorIsOpen] = useState(false)
  const [priorityEditorIsOpen, setPriorityEditorIsOpen] = useState(false)

  const editorIsOpen = titleEditorIsOpen || priorityEditorIsOpen

  const closeAllEditors = () => {
    setTitleEditorIsOpen(false)
    setPriorityEditorIsOpen(false)
  }

  const titleInput = useRef(null);
  const priorityInput = useRef(null);

  const handleTitleClick = () => {
    setTitleEditorIsOpen(true)
    titleInput.current.select();
  }
  
  const handlePriorityClick = () => {
    setPriorityEditorIsOpen(true)
    priorityInput.current.focus();
  }

  return (
    <>
      <TaskWrapper editorIsOpen={editorIsOpen} isVisible={isVisible}>
        
        <PriorityDotSection>
          <PriorityDot prority={task.prority} onClick={() => handlePriorityClick()}/>
        </PriorityDotSection>
        <TitleSection>

          {!titleEditorIsOpen && !priorityEditorIsOpen && (
            <Title onClick={() => handleTitleClick()}>
              {task.title}
            </Title>
          )}
          
        </TitleSection>

        <FormSection>
          <TitleForm isVisible={titleEditorIsOpen && !priorityEditorIsOpen}>
            <TitleInput
              value={task.title}
              onChange={titleInputOnChange}
              ref={titleInput}
            />
            <ToggleButton onClick={() => closeAllEditors(false)}>Done</ToggleButton>
          </TitleForm>

          <PriorityForm isVisible={priorityEditorIsOpen}>
            <PrioritySliderWrapper>
              <PrioritySlider
                type="range"
                min={1}
                max={10}
                value={task.prority}
                onChange={priorityInputOnChange}
                ref={priorityInput}
              />
            </PrioritySliderWrapper>
            <ToggleButton className="ToggleButton" onClick={() => closeAllEditors(false)}>Done</ToggleButton>
          </PriorityForm>
        </FormSection>

        {!editorIsOpen && (
          <>
            <TaskActionsSection>

              <IconButton icon={<SvgCheck />} onClick={completeOnCLick} isChecked={task.completed}/>
              <IconButton icon={<SvgCross />} onClick={deleteOnCLick}/>

            </TaskActionsSection>
          </>
        )}
      </TaskWrapper>

      {editorIsOpen && (
        <TaskBackdrop onClick={() => closeAllEditors()}/>
      )}
    </>
  )
}

export default Task