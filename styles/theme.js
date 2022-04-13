import { extendTheme } from '@chakra-ui/react'

// const theme = {
//     ...chakraTheme,
//     fonts: {
//         ...chakraTheme.fonts,
//         body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
//     },
//     fontWeights: {
//         normal: 400,
//         medium: 600,
//         bold: 700
//     }
// };

const fonts = {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}
const fontWeights = {
    normal: 400,
    medium: 600,
    bold: 700
}

const theme = extendTheme({ fonts, fontWeights })

export default theme;