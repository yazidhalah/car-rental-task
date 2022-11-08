import "./Container.css";

const Container = (props) => {
  return (
    <>
    <div className="MyPadding">
      {props.children}
      </div>
    </>
  )
}

export default Container