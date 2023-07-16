import './styles.css'

import Header from './Components/Header'
import Section from './Components/Section'
import ListItem from './Components/ListItem'

const gamesListData = [
  {
    url:"https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt:"Imagem do jogo League of Legends"
  },
  {
    url:"https://www.twitch.tv/directory/game/Terraria",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/31376_IGDB-144x192.jpg",
    alt:"Imagem do jogo Terraria"
  },
  {
    url:"https://www.twitch.tv/directory/game/Minecraft",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-144x192.jpg",
    alt:"Imagem do jogo Minecraft"
  },
  {
    url:"https://www.twitch.tv/directory/game/Assassin's%20Creed%20II",
    imageUrl:"https://static-cdn.jtvnw.net/ttv-boxart/264365784_IGDB-144x192.jpg",
    alt:"Imagem do jogo Assassin's Creed II"
  }
]

const streamListData = [
  {
    url:"https://www.youtube.com/@rocketseat",
    imageUrl:"https://yt3.googleusercontent.com/ytc/AOPolaSghYasg6N8adLYx2BNMe7eVzBYrcnM5YguoLxxNg=s176-c-k-c0x00ffffff-no-rj",
    alt:"Imagem do canal Rocketseat"
  },
  {
    url:"https://www.youtube.com/@renatocariani",
    imageUrl:"https://yt3.googleusercontent.com/ytc/AOPolaT1Zx-ZqIjhyp7dnWgKzi3llBGtj-ndWT0htJJiIw=s176-c-k-c0x00ffffff-no-rj",
    alt:"Imagem do canal Renato Cariani"
  },
  {
    url:"https://www.twitch.tv/cellbit",
    imageUrl:"https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png",
    alt:"Imagem do canal Cellbit"
  },
  {
    url:"https://www.youtube.com/@CanaldoEslen",
    imageUrl:"https://yt3.googleusercontent.com/apqDkeN-EThMvtXH0B8QdJZ_cvg3-f8CsxGYfZMYV5Nx-1mSt3dlS2u4G86Lgsp9Z0Jx6nNI=s176-c-k-c0x00ffffff-no-rj",
    alt:"Imagem do canal Eslen Delanogare"
  },
  {
    url:"https://www.youtube.com/@codigofontetv",
    imageUrl:"https://yt3.googleusercontent.com/ytc/AOPolaTI5xRK3b3NeL0Ua2DagGbfdiQTQoKyt1jA0uXQ8A=s176-c-k-c0x00ffffff-no-rj",
    alt:"Imagem do canal Código Fonte TV"
  }
]

const socialListData = [
  {
    url:"https://www.instagram.com/_robert.franca/",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    alt:"Logo do Instagram"
  },
  {
    url:"https://www.linkedin.com/in/robert-fran%C3%A7a-696ba8246/",
    imageUrl:"https://t.ctcdn.com.br/09Y6BbLFxNn7XGCYRGzEI0p0oy8=/400x400/smart/filters:format(webp)/i490027.jpeg",
    alt:"Logo do Linkedin"
  },
  {
    url:"https://github.com/robert-sampaio",
    imageUrl:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    alt:"Logo do GitHub"
  }
]

function App() {
  return (
    <>
      <Header />

      <main>
      <Section 
      title="Meus Jogos"
      subtitle="Os games que eu mais curto jogar!"
      >
      
      {
        gamesListData.map(function(item) {
          return(
            <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
            />
          )
        })
      }

      </Section>

      <Section 
      title="Canais e streamers"
      subtitle="Lista de canais e transmissões que não perco!"
      >

      {
        streamListData.map(function(item) {
          return(
            <ListItem 
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
            />
          )
        })
      }

      </Section>

      <Section
      title="Minhas redes"
      subtitle="Se conecte comigo agora mesmo!"
      >

      {
        socialListData.map(function(item) {
          return(
            <ListItem
            url={item.url}
            imageUrl={item.imageUrl}
            alt={item.alt}
            />
          )
        })
      }  

      </Section>
      </main>
    </>
  )
}

export default App
