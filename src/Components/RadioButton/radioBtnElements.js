import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

export const RadioWrapper = styled.div`
  color: #acacac;
  font-weight: bold;
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomRadio = withStyles({
  root: {
    color: "#ffd3ca",
    "&$checked": {
      color: "#eb8f7a",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
