import { Jodit } from 'jodit';
import React from 'react';

const Editor = React.lazy(() => {
  return import('./editor');
});
export interface JoditReactProps {
  /** Config option from Jodit */
  config?: Partial<Jodit[
    'options'
]>;
  /** Jodit default value */
  defaultValue?: string;
  /** Callback to update the state */
  onChange: (content: string) => void;
}
const JoditReact = (props: JoditReactProps) => {
  const isSSR = typeof window === 'undefined';

  return (
    <div data-testid="jodit-react">
      {!isSSR && (
        <React.Suspense fallback={<div>Loading</div>}>
          <Editor {...props} config={{ disablePlugins: [
                                    'copyformat', 
                                    'drag-and-drop', 
                                    'redo-undo', 
                                    'print', 
                                    'powered-by-jodit',
                                    'placeholder', 
                                    'paste-storage', 
                                    'paste-from-word',
                                    'media',
                                    'line-height',
                                    'key-arrow-outside',
                                    'justify',
                                    'xpath',
                                    'wrap-nodes',
                                    'table-keyboard-navigation',
                                    'speech-recognize',
                                    'source',
                                    'select-cells',
                                    'select',
                                    'search',
                                    'limit',
                                    'spellcheck',
                                    'video',
                                    'image-processor',
                                    'ordered-list',
                                    'paste',
                                    'backspace',
                                    'ai-assistant',
                                    'add-new-line',
                                    'about',
                                    'class-span',
                                    'drag-and-drop-element',
                                    'format-block',
                                    'file',
                                    'iframe',
                                    'hr',
                                    'hotkeys',
                                    'inline-popup'
                                    ]
                                }} />
        </React.Suspense>
      )}
    </div>
  );
};

export default JoditReact;
