import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value) // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((option, index) => ( // map options with key
        <label key={name + '-' + index}>
            <input
                type={'radio'}
                name={name}
                onChange={onChangeCallback}
                value={option}
                checked={option === value ? true : false}
                // name, checked, value, onChange
            />
            {option}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
