// -----------------------------------------------------------------------------
// ���̃t�@�C�����猟��(�}�b�`����s)
//
// Copyright (c) Kuro. All Rights Reserved.
// www:    http://www.haijin-boys.com/
// -----------------------------------------------------------------------------

var s = prompt("����", "");
if (s == "")
	Quit();
var r = new RegExp(s, "i");
var s1 = "";
if (document.selection.Text == "")
	document.selection.SelectAll();
var s1 = document.selection.Text.split("\n");
var s2	= new Array();
for (var i = 0; i < s1.length; i++) {
	var s3 = r.exec(s1[i]);
	if (s3)
		s2.push(s1[i]);
}
document.selection.Text = s2.join("\n");
document.selection.StartOfDocument();
