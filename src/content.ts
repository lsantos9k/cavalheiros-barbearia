export const WHATSAPP_URL = 'https://wa.me/551140874880'
export const WHATSAPP_PHONE = '(11) 4087-4880'
export const INSTAGRAM_URL = 'https://www.instagram.com/cavalheirosbarbeariajundiai/'
export const MAPS_URL = 'https://www.google.com/maps/place/Cavalheiros+Barbearia/@-23.1651935,-46.9164871,17z/data=!3m1!4b1!4m16!1m9!3m8!1s0x94cf25e841ef9b79:0x675a334d129476a1!2sCavalheiros+Barbearia!8m2!3d-23.1651935!4d-46.9139122!9m1!1b1!16s%2Fg%2F11f08f_znt!3m5!1s0x94cf25e841ef9b79:0x675a334d129476a1!8m2!3d-23.1651935!4d-46.9139122!16s%2Fg%2F11f08f_znt'

/**
 * IMAGENS PROVISÓRIAS (Unsplash). Substituir por fotografias reais em alta
 * resolução da fachada, do interior e da equipe (Mauro, Gabriel, James).
 * Coloque os arquivos em /public e aponte aqui, ex.: '/fotos/interior.jpg'.
 */
export const IMAGES = {
  hero: import.meta.env.BASE_URL + 'interior.webp',
  team: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80',
}

/** PENDÊNCIAS DE CONTEÚDO — preencher quando o cliente enviar. */
export const ADDRESS: string | null = 'R. Augusto Saccomani, 30 — Jardim Torres São José, Jundiaí/SP — CEP 13214-522' // fonte: Google Maps
export const HOURS: string[] | null = ['Segunda: 14h–20h', 'Terça a sexta: 09h–20h', 'Sábado: 08h–18h', 'Domingo: fechado'] // fonte: Google Maps

export const REVIEWS = [
  { text: 'Atendimento perfeito do Mauro, Gabriel e James, alem de ter estacionamento, sao educados, rapidos, atenciosos, tem agendamento por telefone e whatsapp, ar condiconado top, musica boa, varios tipos de bebidas, ambiente bem iluminado, cheiroso...', author: 'Christian K.' },
  { text: 'Pessoal super atencioso! Corto o meu cabelo e dos meus filhos a alguns anos!', author: 'Marcio Moreira' },
  { text: 'Excelentes profissionais, recomendo a todos! Um parabéns especial ao Barbeiro Mauro. Local de fácil acesso.', author: 'Alex Helan' },
  { text: 'Atendimento espetacular. Toda a equipe é sensacional. Ambiente descontraído, limpo, aconchegante. Todos os profissionais contam com muita habilidade e técnica.', author: 'Alexsander Monteiro' },
  { text: 'Excelentes profissionais. Atendimento ímpar.', author: 'EDRONES Vídeo e Foto' },
  { text: 'O ambiente é agradável e super limpo. Todos os cabelereiros são bem simpáticos. O Mauro sugeriu um corte de cabelo que combinava perfeitamente...', author: 'Luciano da Valmig' },
  { text: 'Atendimento maravilhoso... Gabriel muito atencioso... Ganhou mais um cliente...', author: 'Levi Franca' },
  { text: 'Excelente atendimento, ambiente agradável e uma galera nota 10! Recomendo!', author: 'Emerson Parizoto' },
  { text: 'Ótimos profissionais, em especial o Gabriel que atendeu meus filhos com muito profissionalismo e cortes bem aparados. Recomendo 👍🏻', author: 'Elisabete' },
  { text: 'Local excelente, atendimento de primeira, preço justo. Acho que não tem como ser melhor do que isso, continuem assim ;)', author: 'Michel Guedes' },
  { text: 'Atendimento sensacional, sem enrolação, ambiente super agradável, quem for uma vez nunca mais troca. Parabéns, pessoal!!!', author: 'wendel musico' },
]
