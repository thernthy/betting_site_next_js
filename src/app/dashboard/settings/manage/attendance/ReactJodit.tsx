import React, { useRef, useState, useEffect } from 'react';
import { Jodit } from 'jodit';
import { JoditReactProps } from './Render';

const Editor = ({ config, defaultValue, onChange }: JoditReactProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [jodit, setJodit] = useState<Jodit>();

  useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      const jodit = Jodit.make(textAreaRef.current, config);
      jodit.events.on('change', (value) => onChange && onChange(value));
      setJodit(jodit);
    }
  }, [config]);

  useEffect(() => {
    if (jodit && defaultValue) {
      jodit.value = defaultValue;
    }
  }, [jodit, defaultValue]);

  return <textarea ref={textAreaRef} />;
};

export default Editor;