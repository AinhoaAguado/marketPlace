/* import ImgLogo from "./../../public/assets/logoColor.png" */

function Nav() {
  return (
   
    <header>
         <nav>
            {/* <img src={ImgLogo} alt="logotipo DevMarket" /> */}
            <div>
            <img src="./../../public/assets/logoColor.png" alt="logotipo DevMarket" />
              <img src="./../../public/assets/fondoBanner.png" alt="background image" />
              <button type='submit'>Editar</button>
            </div>

        </nav>
    </header>
  )
}

export default Nav