function SampleWrapper(props) {
  let displayChildren = props.display;
  let content = props.children;

  if (displayChildren) {
    return <div>{content}</div>;
  } else return <></>;
}

export default SampleWrapper;
