
const handle = (btn) => {
    const item = document.getElementById('showImg');
    const checkBtn = btn.getAttribute('class') == ' btn btn-001' ? true : false;
    item.disabled = true;

    if (checkBtn) {
        item.style.left = '1px'
        item.setAttribute('src', "./images/313480089_5286519758136895_4177157923235292596_n.jpg");
    } else {
        document.querySelectorAll('.btn')[0].disabled = true;
        document.querySelectorAll('.btn')[1].disabled = true;
        item.style.right = '1px'

        item.setAttribute('src', "./images/312626927_1288837818613817_937529466385917697_n.jpg");
        setTimeout(() => {
            item.setAttribute('src', "https://media2.giphy.com/media/LTFmLb6e88cPz2sjux/giphy.gif")
            setTimeout(() => {
                item.setAttribute('src', "https://media.tenor.com/g1_tS_VU14YAAAAM/tears-heartbreak.gif")
                setTimeout(() => {
                    item.setAttribute('src', "https://gifdb.com/images/thumbnail/breaking-up-crying-cartoon-pk426glr68gijnco.gif")
                    setTimeout(() => {
                        item.setAttribute('src', "https://i.pinimg.com/originals/14/ff/7e/14ff7e0a7a9e907891266b406db83a46.gif")
                        setTimeout(()=>{
                            item.disabled = false;
                            document.querySelectorAll('.btn')[0].disabled = false;
                            document.querySelectorAll('.btn')[1].disabled = false;
                        }, 4000)
                    }, 4000)
                }, 4000)
            }, 7000)
        }, 1000)

    }
}