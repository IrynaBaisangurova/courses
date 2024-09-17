

for (var i = 0; i < document.form.length; i++) {
	document.form[i].check[0].checked = true;
	document.form[i].price.value = document.form[i].check[0].value;
	document.form[i].onclick = function(e) {
		var target = e && e.target || e.target;
		if (target.name != 'check') return;
		this.price.value = target.value;
	}
}





