// -----------------------------------------------------------------------------
// ç~èáÇ≈ï¿Ç◊ë÷Ç¶
//
// Copyright (c) Kuro. All Rights Reserved.
// www:    http://www.haijin-boys.com/
// -----------------------------------------------------------------------------

if (document.selection.Text == "")
	document.selection.SelectAll();
document.selection.Text = document.selection.Text.split("\n").sort(function(a, b){ return ((a < b) ? 1 : ((a > b) ? -1 : 0)) }).join("\n");
document.selection.StartOfDocument();
