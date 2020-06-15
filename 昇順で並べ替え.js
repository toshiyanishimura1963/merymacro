// -----------------------------------------------------------------------------
// è∏èáÇ≈ï¿Ç◊ë÷Ç¶
//
// Copyright (c) Kuro. All Rights Reserved.
// www:    http://www.haijin-boys.com/
// -----------------------------------------------------------------------------

if (document.selection.Text == "")
	document.selection.SelectAll();
document.selection.Text = document.selection.Text.split("\n").sort().join("\n");
document.selection.StartOfDocument();
