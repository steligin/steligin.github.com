
$(document).ready(function(){

	// = ��������� ������ ������ � ���������
	$('h2').append('<a href="#header">top</a>');

	// = ������ ������� ��������� � ������� �����
	//	 �� ��� ������ ����� ������� ���������� �� #
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 325, 'swing', function () {
			window.location.hash = target;
		});
	});

});
