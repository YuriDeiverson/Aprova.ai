import { Question } from '../types';

// Questões da Parte 4 - Jornalismo com categorias mapeadas para as seções de estudo

export const questionsPart4: Question[] = [

    // Assessoria de Imprensa (301-304, 313-314, 317-322)
    {
        id: 301,
        category: 'Assessoria de Imprensa',
        text: 'Em relação à assessoria de imprensa, julgue o item a seguir: As assessorias de comunicação buscam visibilidade para seus clientes, intermediando relações entre fonte e jornalista, e trabalham para publicar notícias de interesse institucional em espaços editoriais pagos.',
        correct: 'Errado',
        explanation: 'Errado. A assessoria de imprensa realmente busca dar visibilidade ao assessorado e atua como intermediária entre a organização e os jornalistas. No entanto, seu objetivo é conquistar espaço editorial espontâneo (mídia espontânea), baseado no interesse jornalístico da informação, e não publicar notícias em espaços editoriais pagos. Quando há pagamento pela veiculação, trata-se de publicidade ou informe publicitário, e não de atividade típica de assessoria de imprensa.',
        reference: 'Assessoria de Imprensa e Comunicação Organizacional'
    },

    {
        id: 302,
        category: 'Assessoria de Imprensa',
        text: 'As assessorias de comunicação buscam visibilidade para seus clientes, intermediando relações entre fonte e jornalista, e trabalham para publicar notícias de interesse institucional em espaços editoriais pagos.',
        correct: 'Errado',
        explanation: 'Errado. Embora as assessorias de comunicação realmente busquem visibilidade e atuem como intermediárias, seu objetivo é conquistar espaço editorial espontâneo (mídia espontânea) baseado no interesse jornalístico, não em espaços editoriais pagos. A publicação em espaços pagos caracteriza-se como publicidade ou informe publicitário.',
        reference: 'Assessoria de Imprensa e Comunicação Organizacional'
    },

    {
        id: 303,
        category: 'Assessoria de Imprensa',
        text: 'A assessoria de imprensa divulga informações relevantes para construir uma imagem positiva do assessorado, fortalecendo as relações com a mídia para melhorar a comunicação a longo prazo.',
        correct: 'Certo',
        explanation: 'Certo. Esta é uma das principais funções da assessoria de imprensa: divulgar informações estratégicas e relevantes do assessorado de forma a construir uma imagem positiva, estabelecer relacionamentos duradouros com veículos de mídia e jornalistas, e melhorar a comunicação contínua com o público-alvo.',
        reference: 'Função e Estratégias da Assessoria de Imprensa'
    },

    {
        id: 304,
        category: 'Assessoria de Imprensa',
        text: 'A assessoria de imprensa atua como ponte entre a empresa e os jornalistas, facilitando a criação de uma realidade conduzida pelos meios de comunicação.',
        correct: 'Errado',
        explanation: 'Errado. Embora a assessoria de imprensa realmente atue como ponte entre a organização e os jornalistas, seu objetivo não é "criar uma realidade conduzida" pelos meios de comunicação, mas sim transmitir informações verdadeiras e de interesse público. A criação de uma realidade distorcida violaria princípios éticos do jornalismo.',
        reference: 'Ética e Responsabilidade da Assessoria de Imprensa'
    },

    // Técnicas de Redação (305-307, 310-312)
    {
        id: 305,
        category: 'Técnicas de Redação',
        text: 'A editoria de arte, área responsável pela transmissão de informações de forma visual, como gráficos, mapas e ilustrações, é essencial em jornal e telejornal em tempos de mídias convergentes e dinâmicas, mas dispensável na Internet.',
        correct: 'Errado',
        explanation: 'Errado. A editoria de arte é fundamental em todos os formatos jornalísticos, incluindo a Internet. Em tempos de mídias convergentes, a apresentação visual é ainda mais importante na web, onde gráficos interativos, infográficos e ilustrações aumentam o engajamento e a compreensão das informações.',
        reference: 'Diagramação e Editorias no Jornalismo Convergente'
    },

    {
        id: 306,
        category: 'Técnicas de Redação',
        text: 'Os diagramadores, ligados à editoria de arte, organizam o material nas páginas conforme o projeto gráfico do jornal e preceitos universais, tais como formatos de textos, títulos, fotos, entre outros elementos.',
        correct: 'Certo',
        explanation: 'Certo. Os diagramadores são profissionais responsáveis pela organização visual do conteúdo jornalístico, seguindo o projeto gráfico da publicação e princípios universais de design, como hierarquia visual, tipografia, alinhamento e proporção de elementos.',
        reference: 'Diagramação e Projeto Gráfico em Jornalismo'
    },

    {
        id: 307,
        category: 'Técnicas de Redação',
        text: 'O jornalista especializado em determinada área do saber deve combinar conhecimentos técnicos e habilidades de comunicação para oferecer conteúdos que atendam aos interesses da audiência, adaptando a linguagem conforme o público e a editoria.',
        correct: 'Certo',
        explanation: 'Certo. O jornalista especializado deve dominar tanto os conhecimentos técnicos da sua área de cobertura quanto as habilidades de comunicação para traduzir informações complexas de forma acessível e apropriada para o público-alvo e o formato da editoria.',
        reference: 'Jornalismo Especializado e Técnicas de Redação'
    },

    // Jornalismo Digital e Web (308-309)
    {
        id: 308,
        category: 'Jornalismo Digital e Web',
        text: 'Os conteúdos jornalísticos em portais da Internet obedecem a um formato único, especializado, por isso a informação ou o entretenimento na Web alcançam médio engajamento com o público.',
        correct: 'Errado',
        explanation: 'Errado. Os conteúdos jornalísticos em portais da Internet obedecem a múltiplos formatos: textos, vídeos, podcasts, infográficos interativos, lives, entre outros. Essa diversidade de formatos permite maior engajamento com o público, não um engajamento médio.',
        reference: 'Jornalismo Digital e Convergência de Mídias'
    },

    {
        id: 309,
        category: 'Jornalismo Digital e Web',
        text: 'Como as tecnologias permeiam a vida cotidiana, abrangendo diversas áreas do mercado e do entretenimento, o jornalista deve transmitir conteúdos a elas relacionados de forma clara e acessível, tanto com base na opinião de especialistas quanto em conformidade com os anseios do público.',
        correct: 'Certo',
        explanation: 'Certo. Em um contexto de transformação tecnológica e digital, o jornalista deve cobrir temas relacionados com clareza, acessibilidade e equilíbrio entre fontes especializadas e interesse público, traduzindo conceitos complexos em linguagem compreensível ao público geral.',
        reference: 'Jornalismo Especializado em Tecnologia'
    },

    {
        id: 310,
        category: 'Técnicas de Redação',
        text: 'No jornal, as sub-retrancas são reportagens relacionadas ao tema principal da matéria jornalística, como uma história específica relacionada ao evento central.',
        correct: 'Certo',
        explanation: 'Certo. Sub-retrancas (ou retrancas) são reportagens complementares relacionadas ao tema principal de uma matéria, oferecendo perspectivas secundárias, histórias ligadas ou informações contextuais que enriquecem a cobertura jornalística.',
        reference: 'Estrutura de Matérias Jornalísticas no Jornal'
    },

    {
        id: 311,
        category: 'Técnicas de Redação',
        text: 'A condução de entrevistas requer que o jornalista não apenas conheça o propósito da entrevista e tenha clareza daquilo que deseja perguntar, mas também seja especialista no tema a ser tratado, não bastando, para a eficácia desse trabalho jornalístico, a curiosidade do profissional ou sua atenção e interesse no assunto abordado pelo entrevistado.',
        correct: 'Errado',
        explanation: 'Errado. Para a eficácia de uma entrevista jornalística, não é obrigatório que o jornalista seja um especialista no tema. Ao contrário, a curiosidade, atenção, interesse genuíno e bom preparo (conhecimento do objetivo e das perguntas) são essenciais. Um jornalista pode ser um bom entrevistador sem ser especialista, desde que tenha interesse no assunto.',
        reference: 'Técnicas de Entrevista em Jornalismo'
    },

    {
        id: 312,
        category: 'Técnicas de Redação',
        text: 'Os textos de revistas são diretos e factuais, ao passo que os dos jornais atraem leitores com abordagens diferenciadas e textos mais informais.',
        correct: 'Errado',
        explanation: 'Errado. A relação está invertida: os jornais utilizam linguagem direta e factual para informar rapidamente sobre acontecimentos atuais, enquanto as revistas exploram abordagens mais analíticas, contextualizadas e, frequentemente, mais literárias, com textos mais elaborados e reflexivos.',
        reference: 'Características Textuais de Jornais e Revistas'
    },

    {
        id: 313,
        category: 'Assessoria de Imprensa',
        text: 'A clipagem é utilizada por assessorias de imprensa e empresas especializadas, como as clipadoras, para monitorar a cobertura da mídia.',
        correct: 'Certo',
        explanation: 'Certo. Clipagem (ou clipping) é o processo de monitoramento, seleção e arquivamento de notícias publicadas na mídia sobre um cliente ou tema específico, realizado por assessorias de imprensa e empresas especializadas (clipadoras), permitindo acompanhamento sistemático da cobertura.',
        reference: 'Monitoramento de Mídia em Assessoria de Imprensa'
    },

    {
        id: 314,
        category: 'Assessoria de Imprensa',
        text: 'Mailing de imprensa consiste no acompanhamento e arquivamento de notícias publicadas na imprensa, realizado por meio de recortes, gravações ou cópias digitais.',
        correct: 'Errado',
        explanation: 'Errado. Mailing de imprensa é uma lista de contatos (jornalistas, redatores, produtores) utilizada para disseminar informações. O processo descrito na questão corresponde à clipagem ou monitoramento de mídia, não ao mailing.',
        reference: 'Ferramentas de Comunicação em Assessoria de Imprensa'
    },

    // Divulgação Científica e Sistemas de Inovação (315-316)
    {
        id: 315,
        category: 'Divulgação Científica e Sistemas de Inovação',
        text: 'O jornalismo científico requer dos jornalistas que atuam nessa área domínio das técnicas de redação, além de conhecimento sobre pesquisa, história da ciência, política científica, atualização constante e contato com a comunidade científica.',
        correct: 'Certo',
        explanation: 'Certo. O jornalismo científico é uma especialidade que exige não apenas domínio de técnicas de redação, mas também conhecimento substantivo sobre como funciona a pesquisa científica, contexto histórico, políticas de ciência e tecnologia, além de manter relacionamentos com pesquisadores e estar sempre atualizado.',
        reference: 'Jornalismo Científico e Especialização'
    },

    {
        id: 316,
        category: 'Divulgação Científica e Sistemas de Inovação',
        text: 'Na cobertura de eventos técnico-científicos, o jornalista deve assistir às palestras, ler e interpretar sozinho os artigos científicos em que elas se baseiam, não sendo recomendável a realização de entrevistas com os pesquisadores, já que esses eventos contam com assessores de imprensa, cujo papel é facilitar a comunicação entre cientistas e jornalistas.',
        correct: 'Errado',
        explanation: 'Errado. É altamente recomendável que o jornalista realize entrevistas com os pesquisadores. Embora os assessores de imprensa facilitem a comunicação, as entrevistas diretas permitem ao jornalista obter esclarecimentos, contextualizações e perspectivas que enriquecem a cobertura e garantem precisão na comunicação científica.',
        reference: 'Cobertura de Eventos Científicos em Jornalismo'
    },

    // Assessoria de Imprensa - Jornalismo Institucional (317-322)
    {
        id: 317,
        category: 'Assessoria de Imprensa',
        text: 'Os textos jornalísticos de caráter institucional devem abranger conteúdos de interesse do público e destacar os aspectos mais relevantes da atuação da organização.',
        correct: 'Certo',
        explanation: 'Certo. O jornalismo institucional combina interesse público com informações relevantes sobre a organização. O texto deve ser genuinamente informativo para o leitor/ouvinte, enquanto apresenta os aspectos mais significativos e positivos da atuação institucional.',
        reference: 'Jornalismo Institucional e Comunicação Organizacional'
    },

    {
        id: 318,
        category: 'Assessoria de Imprensa',
        text: 'O emprego de linguagem complexa nos textos jornalísticos institucionais valoriza a imagem da organização perante o público e realça a importância dos conteúdos divulgados, despertando o interesse de colaboradores e clientes.',
        correct: 'Errado',
        explanation: 'Errado. A linguagem em textos jornalísticos institucionais deve ser clara, acessível e compreensível. Linguagem complexa prejudica a compreensão, afasta o público e reduz o engajamento. A qualidade do conteúdo e sua relevância, não a complexidade linguística, valorizam a imagem da organização.',
        reference: 'Linguagem e Acessibilidade em Jornalismo Institucional'
    },

    {
        id: 319,
        category: 'Assessoria de Imprensa',
        text: 'No jornalismo institucional, prioriza-se a produção de conteúdos inéditos e atualizados acerca das atividades mais importantes da organização.',
        correct: 'Certo',
        explanation: 'Certo. O jornalismo institucional busca produzir conteúdos inéditos, relevantes e atualizados sobre as atividades significativas da organização, mantendo a audiência informada e engajada sobre iniciativas, projetos e conquistas importantes.',
        reference: 'Estratégias de Conteúdo em Jornalismo Institucional'
    },

    {
        id: 320,
        category: 'Assessoria de Imprensa',
        text: 'No nível operacional do planejamento estratégico, deve-se medir o erro a partir do feedback, ou seja, deve-se considerar a diferença entre o valor planejado e o valor real obtido.',
        correct: 'Certo',
        explanation: 'Certo. No planejamento estratégico operacional, a medição de resultados envolve a análise de desvios entre o que foi planejado e o que foi realmente alcançado, utilizando feedback para avaliar a eficácia das ações implementadas.',
        reference: 'Planejamento Estratégico e Controle Operacional'
    },

    {
        id: 321,
        category: 'Assessoria de Imprensa',
        text: 'O trinômio que orienta o planejamento estratégico das organizações em busca de vantagens, capacidades e competências distintas das concorrentes é formado por missão, sucessos e conquistas.',
        correct: 'Errado',
        explanation: 'Errado. O trinômio tradicional do planejamento estratégico é formado por missão, visão e valores (ou visão, missão e objetivos estratégicos), não por "missão, sucessos e conquistas". Esses elementos fundamentais guiam a organização em direção ao diferencial competitivo.',
        reference: 'Planejamento Estratégico e Identidade Organizacional'
    },

    {
        id: 322,
        category: 'Assessoria de Imprensa',
        text: 'O diagnóstico estratégico envolve o conhecimento do contexto interno da organização a partir da análise de suas forças e potencialidades, bem como de suas fragilidades e fraquezas, visando às oportunidades de realização de seus objetivos.',
        correct: 'Certo',
        explanation: 'Certo. O diagnóstico estratégico engloba a análise SWOT interna (forças e fraquezas) e também avalia oportunidades no ambiente externo, permitindo à organização identificar como aproveitar suas capacidades para alcançar seus objetivos estratégicos.',
        reference: 'Diagnóstico Estratégico e Análise SWOT'
    },

    // Ética e Legislação dos Meios (323-326)
    {
        id: 323,
        category: 'Ética e Legislação dos Meios',
        text: 'O reconhecimento de autoria é um direito inalienável que se extingue com a morte do autor.',
        correct: 'Certo',
        explanation: 'Certo. O reconhecimento de autoria (direito moral) é um direito personalíssimo e inalienável. A Lei de Direitos Autorais reconhece que este direito persiste mesmo após a morte do autor, sendo exercido pela sua memória ou por sucessores designados.',
        reference: 'Direito Autoral e Propriedade Intelectual'
    },

    {
        id: 324,
        category: 'Ética e Legislação dos Meios',
        text: 'O autor de uma obra artística, como, por exemplo, o roteiro de um filme, possui os direitos moral e patrimonial sobre a propriedade intelectual.',
        correct: 'Certo',
        explanation: 'Certo. O autor de qualquer obra intelectual (incluindo roteiros de filmes) possui dois tipos de direitos: o direito moral (reconhecimento de autoria, integridade da obra) e o direito patrimonial (exploração econômica da obra).',
        reference: 'Direitos Autorais: Moral e Patrimonial'
    },

    {
        id: 325,
        category: 'Ética e Legislação dos Meios',
        text: 'Os direitos patrimoniais incluem os direitos de reprodução, distribuição, difusão ou comunicação pública, e tradução.',
        correct: 'Certo',
        explanation: 'Certo. Os direitos patrimoniais autorais abrangem os direitos de reprodução, distribuição, aluguel, comunicação pública (inclusive transmissão e retransmissão), adaptação e tradução da obra, permitindo ao autor controlar e obter benefícios econômicos da exploração.',
        reference: 'Direitos Patrimoniais em Lei de Direitos Autorais'
    },

    {
        id: 326,
        category: 'Ética e Legislação dos Meios',
        text: 'Para a produção de anúncios publicitários, é legalmente permitido a uma organização alterar a letra de uma obra musical, desde que o fato seja comunicado ao autor, com antecedência, por carta ou email.',
        correct: 'Errado',
        explanation: 'Errado. Para utilizar uma obra musical (incluindo alterações de letra) em anúncios publicitários, é necessário obter autorização prévia expressa do autor ou titular de direitos, não sendo suficiente apenas comunicar. Além disso, geralmente há compensação financeira envolvida (royalties ou direitos de sincronização).',
        reference: 'Direitos de Adaptação e Uso Comercial de Obras'
    }

];