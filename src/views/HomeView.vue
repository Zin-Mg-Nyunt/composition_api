<template>
  <PostList :posts="posts"></PostList>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList'
export default {
  components: { PostList },
  setup(){
    let posts = ref([
      { 
        title: "Post Title 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero unde nisi accusantium voluptatibus quae sit officiis eum iste repellat cupiditate, sapiente odit optio debitis aspernatur possimus eius molestiae perspiciatis recusandae nam corrupti expedita. Earum amet laborum fuga, iure repellat, atque nisi laudantium, pariatur neque deserunt illum suscipit placeat. Provident vero repellat vel incidunt tenetur culpa at officia sit? Neque doloribus est aut repellat qui optio, fugit consequuntur iure fugiat possimus ex ipsa. Voluptatibus optio, error sit explicabo dolore repudiandae corrupti libero aspernatur ipsum nostrum fuga pariatur debitis officia eaque autem. Et vero deleniti consequuntur vel, doloribus quod pariatur corrupti. Quam velit fuga aperiam sed laborum aliquid labore neque est, iste dicta laboriosam hic libero voluptatem corrupti odit amet illo odio culpa mollitia. Alias non consequatur illo reiciendis voluptatum sapiente corporis eos nisi, id tempora dolor provident odit voluptates officiis dolores repellat nihil modi sed ipsum perferendis? Atque reprehenderit odio ea harum! Ad saepe recusandae ea, nostrum unde voluptatem minima quae repudiandae, sapiente, aliquid culpa odio quos nesciunt voluptatum mollitia molestiae vero aut dolorem id impedit praesentium est consectetur vitae quidem. Quas ullam odit repellendus aliquam reiciendis tempora veritatis, quasi expedita quod nulla, enim voluptas aliquid ipsam sit voluptatibus! Fugiat culpa laborum veritatis reprehenderit omnis magnam quos accusamus aliquid aut harum veniam dignissimos, adipisci, sed accusantium quidem rem aperiam ipsam aspernatur? Iste natus iusto, explicabo, minima deleniti inventore illum voluptatum magnam aut provident at mollitia omnis, aliquam non dolorem dicta rerum incidunt fugiat minus necessitatibus velit laborum iure molestias nemo. Dolorum repellat dolor ea nulla aspernatur fugit reprehenderit tempore impedit perferendis architecto officiis suscipit ad inventore facilis, autem dignissimos ab minima recusandae vitae molestias placeat! Magnam nam culpa molestiae nemo rerum, possimus dolorum, ullam ex officiis soluta recusandae iure officia, accusantium odio fugiat ducimus excepturi cum esse harum illo animi!",
        id: 1
      },
      {
        title: "Post Title 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eaque nostrum accusamus, odio dolor perspiciatis accusantium, ducimus eligendi ipsa, sed soluta assumenda. Corrupti aspernatur repellendus dolorem alias hic odit eveniet, in doloribus animi maiores beatae vel suscipit repudiandae dicta aut perspiciatis aliquam fugit id omnis aliquid minus. Itaque aliquid neque, molestiae ullam hic eum consequuntur. Aspernatur adipisci rerum, nisi soluta debitis repellat veniam accusamus cum provident. Quos accusamus aliquam, dolore magnam tempore quasi aliquid! Laborum, reprehenderit harum? Dignissimos iure quod quo ab rerum, alias a necessitatibus, illo, dolor eius earum hic. Accusamus eius ad repellat distinctio impedit. Voluptate ut architecto quas impedit autem, sit nobis blanditiis unde exercitationem similique omnis laboriosam, provident fugit ullam! Voluptate illum voluptatem accusantium, dolorum beatae quibusdam? Quibusdam sit voluptatibus error accusantium placeat laudantium et natus, distinctio expedita aliquam voluptates, consequatur, unde dolorum tempora illo eos fugiat autem iusto quasi harum necessitatibus magni recusandae! Ex dignissimos harum perspiciatis deleniti voluptatum enim fuga accusantium consequatur placeat officiis hic, temporibus ipsam esse pariatur. Tempora ex fuga porro dignissimos minus, corrupti dolor inventore ullam alias laudantium ab non voluptas nostrum natus rem labore perferendis reiciendis asperiores ut ipsum quidem? Provident laboriosam veritatis incidunt dolor quaerat facilis autem nostrum excepturi natus pariatur error tempore laudantium itaque hic dicta nesciunt, vel iste odio eligendi nam temporibus! Corporis blanditiis nobis asperiores quam amet sed repellendus porro quae. Voluptates doloremque harum, in voluptatem ipsa vel maxime numquam, minima excepturi sed blanditiis et ab explicabo dicta nam ullam quibusdam expedita facere esse ipsum atque.",
        id: 2
      }
    ])

    return {posts}
  }
}
</script>

<style>

</style>