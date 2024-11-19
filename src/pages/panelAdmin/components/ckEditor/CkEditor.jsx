import { ClassicEditor, Context, Bold, Essentials, Italic, Paragraph, ContextWatchdog } from 'ckeditor5';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

import 'ckeditor5/ckeditor5.css';
import './ckeditor.css'

function App(props) {
  return (
    <CKEditorContext
        context={ Context }
        contextWatchdog={ ContextWatchdog }
        onChangeInitializedEditors={ ( editors ) => {
            console.info( editors.editor1?.instance, editors.editor1?.yourAdditionalData );
        } }
    >
      <CKEditor
        editor={ ClassicEditor }
        
        config={ {
          plugins: [ Essentials, Bold, Italic, Paragraph ],
          toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ],
        } }
        
        contextItemMetadata={{
            name: 'editor1',
            yourAdditionalData: 3
        }}
        
        onBlur={ (event ,editor) => {

          props.changeTextArea(editor.getData())

        }}

      />

    </CKEditorContext>
  );
}

export default App;

