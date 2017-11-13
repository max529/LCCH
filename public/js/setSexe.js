function setSexe(t, id, sexe) {
    $.ajax({
        url: '/setSexe',
        type: 'Post',
        data: { id: id, sexe: sexe },
        success: function (res) {
            t.parentNode.parentNode.parentNode.parentNode.removeChild(t.parentNode.parentNode.parentNode)
        }
    })
}