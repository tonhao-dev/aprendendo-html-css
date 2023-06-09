function editar_turma(num_cartao) {
    card = document.getElementById('cartao' + num_cartao.toString(10))
    card.innerHTML = 
      '<form method="POST" action="editarTurma.php" name="form-editar">'
    + '    <textarea id="input-nome-turma" class="sliderText"></textarea> '
    + '    <div class="content">'
    + '        <p>Dias de almoço: Segunda e Quarta</p>'
    + '        <input type="submit" value="SALVAR" class="btn-card">'
    + '    </div>'
    + '</form>'

    
}

function excluir_turma(num_cartao) {
	alert('Ola')
	card = document.getElementById('cartao' + num_cartao.toString(10))
    card.innerHTML = '<form name="form-excluir" method="POST" action="excluirTurma.php"></form>';

    document.forms["form-excluir"].submit()

    window.location.reload()
}