package ;

import view.ImageAppState;
import api.react.ReactDOM;
import api.react.React;
import js.Browser;

class ReactMainState {
    public function new() {
        CreateReact();
    }

    public function CreateReact(){
        ReactDOM.render(React.createElement(ImageAppState),Browser.document.getElementById('app2'));
    }
}
