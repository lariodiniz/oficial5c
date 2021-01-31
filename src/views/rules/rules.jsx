import React from 'react'
import './rules.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Navbar from '../../components/navbar/navbar'
const rules = (props) => {
        
        return (
            <div>
                <Navbar />
                <Container className="rules-container">
                    <Row>
                        <Col xs={12}>
                            <h1>Regras dos grupos</h1>
                            <h2>Explicações iniciais</h2>
                            <p>1º - O nome <strong>COMUNISTA</strong> no grupo não é atoa, pode ser que não tenhamos explicado direito ou que não tenha ficado claro, mas a ideia aqui além da gente zoar, falar mal de bolsominioun e trocar memes é, principalmente, comentar, estudar e debater o comunismo, anarquismo e anti-capitalismo, então vai rolar cobranças, desavenças e espero que tenham maturidade pra lidar com isso, senão fica complicado.</p>
                            <p>2º - Sempre rola piadas de panelinhas, mas todo grupo (não to me referindo só a whatsapp) vai ter uma galera mais ativa, com ideias que combinam mais e, naturalmente, tendem a se matenter mais juntos. Não vejo problemas nenhum nisso, então caso alguém queira fazer parte da "panela" é só arregaçar as mangas e começar a ser pró ativo, mas lembrando a primeira parte, o grupo tem como objetivo o <strong>COMUNISMO</strong>. Não é centro esquerda e muito menos centro direita. Como a gente sempre fala na live, estamos estudando maneiras de começar a fazer ações diretas assim que a pandemia acabar, quem tiver alguma ideia e quiser somar, estão TODOS convidados.</p>
                            <h2>Regras</h2>
                            <p>01. Seja elegante: não ofenda a nível pessoal o coleguinha, isso é feio e papai do chão briga. Ataques diretos serão passíveis de banimento;</p>
                            <p>02. Comentários ou posts racistas, transfóbicos, gordofóbicos, misóginos, capacitistas, LGBTfóbicos, xenofóbicos ou de preconceito com quaisquer outras minorias representativas serão rejeitados e seus autores, passíveis de punição;</p>
                            <p>03. Desrespeito ou normalização de temas sensíveis, que gerem gatilhos às populações afetadas, como violência, suicídio, estupro, etc. não serão tolerados;</p>
                            <p>04. É <strong>PERMITIDO</strong> e incentivado que os membros do grupo brinquem, façam piadas, zoem uns aos outros, desde que não firam os itens 2 e 3. Caso o membro alvo das brincadeiras sinta-se ofendido ele pode solicitar que as mesmas parem, caso isso ocorra, torna-se <strong>PROIBIDO</strong> fazer aquela brincadeira com aquele membro;</p>
                            <p>05. É de bom tom que, ao postar algo sobre quaisquer um dos temas sensíveis relacionados nos itens 2 ou 3 e afins, começar com um "Aviso de Gatilho", para que as pessoas afetadas sobre esses temas tenham a possibilidade de evitá-los;</p>
                            <p>06. Não fale merda: ou se falar, e alguém apontar que você falou merda, limpe a merda e se desculpe. Normalmente, 5 pessoas indicando que uma está equivocada costuma ser um indício que alguma merda foi dita;</p>
                            <p>07. Quando for fazer uma “piada”, se pergunte “Isso seria algo que o Danilo Gentili falaria?”. Se a resposta for “sim”, não poste;</p>
                            <p>08. Neste grupo há pessoas com histórias e vivências das mais diversas. Se você fez um comentário que pode ser lido como homofóbico, por exemplo, e alguém te chama a atenção sobre isso, respeite a vivência da pessoa. Ninguém aqui é burro. Você não é um gênio do humor e do sarcasmo. A possibilidade de que você tenha sido um babaca e dado uma bola fora é bem grande. Por isso, considere seriamente pedir desculpas. Isso vai evitar uma série de problemas e seu banimento;</p>
                            <p>09. Converse como um adulto, isso significa falar claramente o que você quer dizer e não esperar que os outros entendam algo que você quis deixar subentendido;</p>
                            <p>10. Por ultimo, porém mais importante! Se alguém discordar de você, não leve pro coração, não é algo pessoal, discordância é normal. Se for discordar de alguém, faça de maneira respeitosa, pois estamos debantendo as ideias do mesmo lado político;</p>
                        </Col>
                    </Row>

                </Container>
            </div>

        )
    }

export default rules