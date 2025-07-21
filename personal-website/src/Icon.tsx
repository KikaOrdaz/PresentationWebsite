type IconProps = {
  src: string
  size?: string // e.g., '20px'
  pad?: string
}

export default function Icon ({src, size = '[20px]', pad = 'px-2'}: IconProps){
    return(
        <div className={`${pad}`}>
                <img
                    src= {src}
                    alt="phone-icon"
                    className={`w-${size}`}
                />
            </div>
    )
}