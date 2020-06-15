document.selection.Replace("(取引メッセージ|落札者 商品を受け取りました|商品を発送しました|落札者 取引メッセージ|まとめて取引されています|落札者 支払いが完了しました|落札者 送付先住所、支払い、発送などについて|)\\n\\n取引連絡\\n評価\\n再出品\\n", "", meFindNext | meFindReplaceRegExp | meReplaceAll);

