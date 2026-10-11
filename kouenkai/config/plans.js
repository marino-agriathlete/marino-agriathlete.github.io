// 会費プラン設定
// プランを増やす・金額を変える・非公開にする場合は、このファイルだけを編集してください。
// enabled: true  → 入会フォームに表示
// enabled: false → 非表示（削除せず残しておけます）
// price は円の数字で入力します（例: 3000）。未定の場合は null のままにします。

const PLANS = [
  {
    id: "individual",
    name: "個人サポーター",
    price: 5000,
    description: "一口",
    enabled: true,
  },
  {
    id: "corporate",
    name: "企業サポーター",
    price: 10000,
    description: "一口",
    enabled: true,
  },
  // 例：プランを追加する場合は、以下のように書き足します
  // {
  //   id: "plan-c",
  //   name: "学生会員",
  //   price: 2000,
  //   description: "年間会費",
  //   enabled: true,
  // },
];
