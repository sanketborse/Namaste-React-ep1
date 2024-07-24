const heading = React.createElement('div',{id:"heading1"},React.createElement(
    'div',{id:"heading2"},React.createElement(
        'h1',{id:"heading3"},"New Element Is Created By React")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);