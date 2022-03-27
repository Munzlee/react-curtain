# A react based curtain animation

A fancy curtain open animation component. Witch is highly modifyable.


## Installation

Install it to youre node_modules.

```sh
yarn add react-curtain
```



## Usage

To get started, put the curtain component around your root component. Define the curtain side colors or any kind of styling.
Define the opening trigers like the example down below.

```javascript
ReactDOM.render(
  <React.StrictMode>
   <Curtain
      styleLeftSide={{
        backgroundImage: `url(${Left})`,
        backgroundColor: "#0C0B22",
      }}
      styleRightSide={{
        backgroundImage: `url(${Right})`,
        backgroundColor: "#0C0B22",
      }}
      automaticOpening={true}
      automaticOpeningDelay={500}
      clickOpening={true}
      touchOpening={true}
      scrollOpening={true}
    >
    <App/>
    </Curtain>
  </React.StrictMode>,
  document.getElementById('root')
    
```
