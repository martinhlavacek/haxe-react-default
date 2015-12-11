package ;


import api.react.ReactDOM;
import js.Browser;
import api.react.React;

class Main
{
    public function new()
    {
        ReactDOM.render(
            React.createElement(Root, {}),
            Browser.document.getElementById('app')
        );
    }

    static function main()
    {
        new Main();
    }
}
