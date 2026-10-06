import { useState } from 'react'
import { BuscaRegiao } from './BuscaRegiao'
import { Mapa } from './Mapa'
import { MensagemErro } from './MensagemErro'
import { buscarRegiao } from '../services/geocodificacao'
import type { Regiao } from '../types/Regiao'
import type { CidadeIBGE } from '../types/CidadeIBGE'
import styles from './Home.module.css'

export function Home() {
  const [regiao, setRegiao] = useState<Regiao | null>(null)
  const [erro, setErro] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(false)

  async function handleSelecionarCidade(cidade: CidadeIBGE) {
    setCarregando(true)
    setErro(null)
    try {
      const resultado = await buscarRegiao(cidade.nome)
      setRegiao(resultado)
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao localizar a cidade')
      setRegiao(null)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className={styles.container}>
      <h1>Localizador de Cidades</h1>
      <BuscaRegiao
        onSelecionarCidade={handleSelecionarCidade}
        onLimpar={() => setRegiao(null)}
      />
      {carregando && <p className={styles.carregando}>Carregando...</p>}
      {erro && <MensagemErro mensagem={erro} />}
      <Mapa regiao={regiao} />
    </main>
  )
}
