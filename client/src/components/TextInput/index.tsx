import styles from './TextInput.module.css';

const TextInput = ({
  placeholder,
  label,
  error,
  loading,
  textLabel,
  onChange,
  value,
  name,
  id,
  disabled,
  type,
  phone,
  size,
  ...props
}:any) => {

  return (
          <input
            {...props}
            id={id}
            type="type"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            className={styles.textInput}
          />
  );
}
export default TextInput;