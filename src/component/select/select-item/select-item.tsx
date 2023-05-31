export const SelectItem = (props: { children: any; value: any }) => {
    return <option value={props.value}>Items: {props.children}</option>;
};
