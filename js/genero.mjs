import {uniq} from './uniq.mjs'

/*Funcao utilizada para diminuir a quantidade de dados do JSON
Retorno: json menor, com apenas dois dados
Parametro: json completo, com todas as informacoes da playslist
*/
export function diminJSON (itensPlaylist) {
	const diminVar = item => {
		let art = {
			artUrl: item.artUrl,
			musDesc: item.musDesc,
			artDesc: item.artDesc
		}
		return art
	}
	if (itensPlaylist !==  undefined)
		return itensPlaylist.map(diminVar)
}

//função para mandar a resposta anterior para pegar artistas daquele genero no json do vagalume via url
export function achaArt(resp_gen, seletor){
	let url = `https://www.vagalume.com.br/browse/style/${resp_gen}.js`
  const itemArt = i => `<option value="${i.artUrl}">${i.artDesc}</option>`
  const result = (item) => {
		artMus = diminJSON(item.playlist)
		//artist.innerHTML = '<option value="vazio"></option>' //forçar o usuario a tomar uma opção ou deixar vazio
    seletor.innerHTML += item.playlist.map(itemArt).sort().uniq().join('')
  }
  fetch(url)
						.then(resposta => resposta.json()) //.then é equivalente ao sucess, o primeiro recebe a resposta e extrai apenas o json útil dela
						.then(result) //aqui vai oq vc faz com a resposta definitiva
}
