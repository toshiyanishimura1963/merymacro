// -----------------------------------------------------------------------------
// òAë±Ç∑ÇÈèdï°çsÇçÌèú
//
// Copyright (c) Kuro. All Rights Reserved.
// www:    http://www.haijin-boys.com/
// -----------------------------------------------------------------------------

if (document.selection.Text == "")
	document.selection.SelectAll();
var s1 = document.selection.Text.split("\n");
var s2	= new Array();
for (var i = 0; i < s1.length; i++) {
	if (i == 0 || s1[i-1] != s1[i])
		s2.push(s1[i]);
}
document.selection.Text = s2.join("\n");
document.selection.StartOfDocument();
