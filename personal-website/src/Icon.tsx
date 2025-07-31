type IconProps = {
  src: string
  size?: string // e.g., '20px'
  width?: string // e.g., '20px'
  pad?: string
}

export default function Icon ({src, size = '30', width = size, pad = 'px-2'}: IconProps){
    return(
        <div className={`${pad}`}>
                <img
                    src= {src}
                    // alt="phone-icon"
                    height={size}
                    width={width}
                />
            </div>
    )
}