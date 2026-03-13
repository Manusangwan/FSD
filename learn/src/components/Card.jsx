import {Bookmark} from "lucide-react"
export default function Card(){
    return(
        <div className="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAARCAMAAAC/+5/SAAAAn1BMVEX///8AEikAGC3/kQAACCQACyUAGi7CxMfp6uvz9PQWJTYAFive3+FjaXEAAB4aKDiKjpQhLT10eYAAACINHzLW19kAABgAAACprLCQlJlHT1krNkQAABU8RVG7vcCeoaVTWWP/yJP/iwD/0qr/uXP/tWqAhIsAAA4zPEnMzdBscXn/rVX/7t7/2bj/+PL/nR3/pDr/zZ7/5tH/mAD/wodfsIKZAAAB1UlEQVQokYWS6ZaiMBCFb2iWAGEPimAAQRFQXPv9n21KjqenZ6Z17uFHSNWXulUJwLs+qi1AxCvu5SWy3BMALK9QnQ1kYxzHY0bxUXkDYI8xxjykhWFGhbMeYCUqMiLWrWVgUL7PlJQFEO99GZgx0oXrsEUJ4QeeH7AK1TIHermCZcqVJSPNWjmGANtnSF2dw+Z25yQCSnbITBOcBV6qHI9K0lfLkMAE8ChsG4y8chD4WEDoWgWeuOkjknJGm5VZA0O9XzoOgZpLoBbC1h/5VbFcRzNYOORpcBkdlciMM4NT6RrD2sj4XHEGzSc4GmpItQfYSdeeQfEN1GoyFwP/gNwnZ7OrIXFCqsX1h1XdHb7AmvrkRlD/CQpmDlhJWaKPIqm7FQqaX2nq+AJDTdZG4eyFxegWPEagrwsYQZAvCroPXQ9yx+9hLbRa8zOIJCGQ0XBGM6hAL2BQNINOVbB7xZEqN09FbqOiBsHpAVi9X5S0VMpGqai/p054oXZ32B5fBUm7zc/7m+t0/XgRe2Y0mx+rnlqcp3cgjufmMP3FntpL06J5y5Hae9Oct9fpdjwdj7fpuqP/7Qnt5/9AYDp8fFNznt2/7fC3bpvd5Xy/Xw6f07th/gJejikknWgJ9AAAAABJRU5ErkJggg==" alt="Amazon"/>
        <button>Save<Bookmark size={20}/></button>
        <p> hello </p>
        </div>
    )
}