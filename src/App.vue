<template>
  <v-app>
    <v-app-bar color="primary" elevation="4" fixed>
      <v-container class="d-flex justify-center">
        <v-tabs 
          centered 
          color="white"
          background-color="primary"
          slider-color="accent"
        >
          <v-tab href="#sobre" class="text-subtitle-1">Sobre</v-tab>
          <v-tab href="#experiencia" class="text-subtitle-1">Experiência</v-tab>
          <v-tab href="#contato" class="text-subtitle-1">Contato</v-tab>
        </v-tabs>
      </v-container>
    </v-app-bar>

    <v-main class="bg-background">
      <v-container>
        <!-- Seção Sobre -->
        <v-row id="sobre" class="mt-16 align-center">
          <v-col cols="12" md="4" class="text-center">
            <v-avatar size="200" class="mb-4 elevation-10">
              <v-img :src="fotoPerfil" alt="João Moreira"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" md="8">
            <h1 class="text-h3 mb-2 font-weight-bold primary--text">João Moreira</h1>
            <h2 class="text-h5 mb-4 secondary--text">Desenvolvedor Full Stack</h2>
            <p class="text-body-1 text-grey-darken-1">
              Sou um Desenvolvedor Full Stack com foco em Java e JavaScript, atualmente trabalhando na SSP-MA. 
              Tenho experiência sólida no desenvolvimento de aplicações web completas, abrangendo tanto o front-end 
              quanto o back-end. Minha especialidade inclui criar e manter sistemas robustos e escaláveis utilizando 
              tecnologias modernas e as melhores práticas de desenvolvimento.
            </p>
          </v-col>
        </v-row>

        <!-- Após a seção Sobre e antes da seção Experiência -->
        <v-row class="mt-16">
          <v-col cols="12">
            <h2 class="text-h4 mb-6 primary--text font-weight-bold">Projetos</h2>
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows="hover"
              class="elevation-3 rounded-lg"
            >
              <v-carousel-item
                v-for="(projeto, i) in projetos"
                :key="i"
              >
                <v-sheet height="100%" class="d-flex align-center">
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-img
                          :src="projeto.imagem"
                          height="300"
                          cover
                          class="rounded-lg"
                        ></v-img>
                      </v-col>
                      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
                        <h3 class="text-h5 mb-4 primary--text font-weight-bold">
                          {{ projeto.titulo }}
                        </h3>
                        <p class="text-body-1 mb-4">{{ projeto.descricao }}</p>
                        <div class="mb-4">
                          <v-chip
                            v-for="(tech, index) in projeto.tecnologias"
                            :key="index"
                            class="mr-2 mb-2"
                            color="secondary"
                            variant="outlined"
                          >
                            {{ tech }}
                          </v-chip>
                        </div>
                        <v-btn
                          :href="projeto.github"
                          target="_blank"
                          color="primary"
                          prepend-icon="mdi-github"
                          variant="elevated"
                          class="align-self-start"
                        >
                          Ver no GitHub
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>

        <!-- Seção Experiência -->
        <v-row id="experiencia" class="mt-16">
          <v-col cols="12">
            <h2 class="text-h4 mb-6 primary--text font-weight-bold">Experiência Profissional</h2>
            
            <v-card class="mb-6 elevation-3 rounded-lg" hover>
              <v-card-text>
                <v-row align="center">
                  <v-col cols="12" md="2" class="text-center">
                    <v-img
                      :src="logoIbrapp"
                      height="80"
                      contain
                      class="mb-2"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="10">
                    <h3 class="text-h5 primary--text">Software Developer</h3>
                    <p class="text-subtitle-1 secondary--text">Instituto Brasileiro de Políticas Públicas - IBRAPP</p>
                    <p class="text-caption">Agosto 2024 - Presente · 6 meses</p>
                    <p class="text-caption mb-4">São Luís, Maranhão, Brazil · Presencial</p>
                    <v-list>
                      <v-list-item v-for="(item, i) in experienciaIBRAPP" :key="i" class="mb-2">
                        <template v-slot:prepend>
                          <v-icon color="secondary" class="mr-2">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 rounded-lg" hover>
              <v-card-text>
                <v-row align="center">
                  <v-col cols="12" md="2" class="text-center">
                    <v-img
                      :src="logoPorto"
                      height="80"
                      contain
                      class="mb-2"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" md="10">
                    <h3 class="text-h5 primary--text">Trainee</h3>
                    <p class="text-subtitle-1 secondary--text">Porto do Itaqui</p>
                    <p class="text-caption">Junho 2019 - Junho 2021 · 2 anos 1 mês</p>
                    <p class="text-caption mb-4">São Luís, Maranhão, Brazil · Presencial</p>
                    <v-list>
                      <v-list-item v-for="(item, i) in experienciaPorto" :key="i" class="mb-2">
                        <template v-slot:prepend>
                          <v-icon color="secondary" class="mr-2">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Seção Contato -->
        <v-row id="contato" class="mt-16">
          <v-col cols="12" class="text-center">
            <h2 class="text-h4 mb-6 primary--text font-weight-bold">Contato</h2>
            <div class="mb-6">
              <v-btn
                color="secondary"
                href="./assets/pdf/JOAOMOREIRA.pdf"
                download="JOAOMOREIRA.pdf"
                prepend-icon="mdi-download"
                size="large"
                class="elevation-3"
                rounded
              >
                Download CV
              </v-btn>
            </div>
            <v-btn
              v-for="(social, i) in socials"
              :key="i"
              :href="social.link"
              target="_blank"
              icon="large"
              class="mx-2 elevation-3"
              :color="social.color"
              variant="elevated"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="primary" class="text-center">
      <v-container>
        <p class="ma-0 white--text">&copy; 2024 João Moreira. Todos os direitos reservados.</p>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import fotoPerfil from './assets/img/FotoPerfil2.jpg'
import nw from './assets/img/Nw.jpg'
import api from './assets/img/NwServer.jpg'
import carros from './assets/img/oracle.jpg'
import carteira from './assets/img/carteira.jpg'
import logoIbrapp from './assets/img/ibrapp.jpg'
import logoPorto from './assets/img/porto.jpg'

const experienciaIBRAPP = [
  'Projetar e desenvolver sistemas backend escaláveis baseados na arquitetura de microservices utilizando Java e Spring Boot',
  'Criar aplicações frontend responsivas utilizando JavaScript e Vue.js',
  'Utilizar bancos de dados PostgreSQL para gestão e armazenamento eficiente de dados',
  'Gerenciar o controle de versão utilizando GitLab para garantir fluxos de trabalho de desenvolvimento e colaboração eficientes'
]

const experienciaPorto = [
  'Desenvolvi sistema de registro de entrada no Porto do Itaqui',
  'Realizei suporte aos sistemas já implantados',
  'Desenvolvimento BackEnd com Java e Spring',
  'Integração de REST APIs',
  'Implementação de funcionalidades offline e gestão de acessos',
  'Uso de bancos de dados MySQL e metodologias ágeis (Scrum)'
]

const socials = [
  { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/jo%C3%A3o-moreira-245a50250/', color: 'blue' },
  { icon: 'mdi-github', link: 'https://github.com/JoaoRicardoMoreira', color: 'grey-darken-3' },
  { icon: 'mdi-email', link: 'joaoricardosm0@gmail.com', color: 'red' }
]

const projetos = [
  {
    titulo: 'New World Board',
    descricao: 'Uma aplicação web desenvolvida com React.js que consome uma API REST para gerenciar um quadro de guerras no jogo new wolrd ',
    tecnologias: ['React.js', 'HTML', 'CSS'],
    github: 'https://github.com/JoaoRicardoMoreira/nw-board-front',
    imagem: nw // Substitua com a imagem real do projeto
  },
  {
    titulo: 'Api New World Board',
    descricao: 'Api RestFull para gerenciar um quadro de guerras no jogo new wolrd , podendo realizar as operações de CRUD',
    tecnologias: ['Node.js', 'MongoDB', 'Api RestFull'],
    github: 'https://github.com/JoaoRicardoMoreira/nw-board',
    imagem: api // Substitua com a imagem real do projeto
  },
  {
    titulo: 'Api de Cadastro de Carros com Oracle',
    descricao: 'Api RestFull para gerenciar um cadastro de carros com banco de dados Oracle',
    tecnologias: ['Java', 'SpringBoot', 'OracleDB'],
    github: 'https://github.com/JoaoRicardoMoreira/carros-service',
    imagem: carros // Substitua com a imagem real do projeto
  },
  {
    titulo: 'Api de Carteira digital e gerenciamento de transações financeiras',
    descricao: 'Api RestFull para gerenciar carteira digital e transações financeiras',
    tecnologias: ['Java', 'SpringBoot', 'H2'],
    github: 'https://github.com/JoaoRicardoMoreira/carteiraDigital-service',
    imagem: carteira // Substitua com a imagem real do projeto
  },
  // Adicione mais projetos conforme necessário
]
</script>

<style scoped>
.v-main {
  background-color: #f8f9fa;
}

.v-carousel {
  background-color: rgb(255, 255, 255, 0.9);
}

.v-sheet {
  background-color: transparent !important;
}

.v-img.company-logo {
  transition: transform 0.3s ease;
}

.v-card:hover .v-img.company-logo {
  transform: scale(1.05);
}
</style> 