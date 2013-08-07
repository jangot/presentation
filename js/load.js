function sc(src) {
    document.write('<script src="js/'+ src +'.js"></script>');
}

sc('data')
sc('lib/jquery-2.0.3.min');
sc('class/presentationModel');
sc('class/app');
sc('view/presentationList');
sc('view/mainNavigation');
sc('view/currentPhoto');
sc('index');