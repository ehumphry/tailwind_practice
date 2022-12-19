const HelloWorld = () => {
    fetch('/')
      .then(response => response.text())
      .then(data => {
        console.log(data);
      });
  
    return <div>Hello World This is people works !</div>;
  };

  export default HelloWorld;