import { ThemeProvider, createTheme, Arwes, Words, Heading } from 'arwes'
import './index.css'
import S from './app.module.css'

function App() {
  return (
    <ThemeProvider theme={createTheme}>
      <Arwes
        animate
        background='https://www.pixelstalk.net/wp-content/uploads/images2/Abstract-Dark-Minimalist-Wallpaper.jpg'
      >
        {(anim) => (
          <div className={S.main}>
            <Heading
              animate
              style={{ padding: '1rem', textAlign: 'center' }}
              node='h1'
            >
              <Words animate show={anim.entered}>
                jims programmering & chark
              </Words>
            </Heading>
          </div>
        )}
      </Arwes>
    </ThemeProvider>
  )
}

export default App
