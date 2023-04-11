import NextButtonArrow from 'pages/ui/nextbuttonarrow/nextbuttonarrow';
import { useRef, useState} from 'react';
import './input.scss';

export default function Input(props) {
  const { placeholder } = props;
  const [ isFocus, setIsFocus ]= useState(false);
  const [ hasContent, setHasContent ]= useState(false);
  const inputEmail = useRef(null);

  const handleChange = event => {
    if(inputEmail?.current?.value.length > 0){
      setHasContent(!hasContent);
    }
  };

  const focusedInput = () => {
    setIsFocus(!isFocus);
  };

  return (
    <span className='input-section--email-wrap'>
      <span className='input-section--input-wrap'>
        <p className={`${'input-section--label-check'} ${isFocus ? 'focused':'unFocused'} ${inputEmail?.current?.value?.length > 0 ? 'content': 'noContent'}`}>
          {placeholder}
        </p>
        <input
          className={`${'input-section--input-box'}`}
          id="message"
          name="message"
          onChange={handleChange}
          // autoComplete="on"
          placeholder={placeholder}
          type='email'
          onFocus={focusedInput}
          onBlur={focusedInput}
          ref={inputEmail}
        />
      </span>
      <span className='input-section--submit-button'>
        <NextButtonArrow arrowDirection={'right'}/>
      </span>
    </span>
  );
}