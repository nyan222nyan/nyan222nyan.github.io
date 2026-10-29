const products = [
	{
		name: "茶トラ猫クッキー缶",
		category: "COOKIE TIN",
		description: "バター香る猫型クッキーを、茶トラ柄の缶にぎゅっと詰めました。",
		price: "2,160円（税込）",
		tag: "人気 No.1",
	},
	{
		name: "黒猫チョコレート",
		category: "CHOCOLATE",
		description: "カカオのコクを楽しむ、ひと口サイズのなめらかチョコレート。",
		price: "1,480円（税込）",
		tag: "手みやげに",
	},
	{
		name: "白猫ミルクキャンディ",
		category: "MILK CANDY",
		description: "ミルクのやさしい甘さが広がる、ころんとかわいいキャンディ。",
		price: "980円（税込）",
		tag: "やさしい甘さ",
	},
];

const reviews = [
	{
		quote: "缶の猫がかわいくて、食べ終わったあとも小物入れにしています。クッキーもサクサクで、家族みんなのお気に入りです。",
		name: "30代・女性",
		product: "茶トラ猫クッキー缶",
	},
	{
		quote: "猫好きの友人へのプレゼントに選びました。パッケージを開けた瞬間に歓声があがって、贈った私までうれしくなりました。",
		name: "40代・女性",
		product: "黒猫チョコレート",
	},
];

const faqs = [
	{
		question: "ギフト用のラッピングはできますか？",
		answer: "はい、ギフト用の包装をご用意しています。ご注文時にギフト包装をお選びください。商品のサイズに合わせて丁寧にお包みします。",
	},
	{
		question: "賞味期限はどのくらいですか？",
		answer: "商品によって異なります。各商品ページに賞味期限の目安を記載していますので、ご購入前にご確認ください。お届け後は直射日光や高温多湿を避けて保管してください。",
	},
	{
		question: "猫が食べても大丈夫なお菓子ですか？",
		answer: "人向けに製造したお菓子です。猫ちゃんには与えず、人と猫が一緒に過ごすおやつ時間をお楽しみください。",
	},
	{
		question: "注文してから何日で届きますか？",
		answer: "通常、ご注文から3〜5営業日以内に発送します。配送状況や繁忙期によって前後する場合があります。",
	},
];

const productList = document.querySelector("#product-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

productList.innerHTML = products.map((product, index) => `
	<article class="product-card">
		<div class="product-image-wrap">
			<img src="https://placehold.jp/600x400.png?text=Item" alt="${product.name}の商品イメージ" loading="lazy">
			<span class="product-tag">${product.tag}</span>
		</div>
		<div class="product-info">
			<p class="product-category">${product.category}</p>
			<h3>${product.name}</h3>
			<p>${product.description}</p>
			<div class="product-bottom">
				<span class="product-price">${product.price}</span>
				<a class="product-link" href="#faq" aria-label="${product.name}について問い合わせる">詳細を見る ↗</a>
			</div>
		</div>
	</article>
`).join("");

voiceList.innerHTML = reviews.map((review, index) => `
	<article class="voice-card">
		<img src="https://placehold.jp/150x150.png?text=User" alt="お客さまのアバター" loading="lazy">
		<div>
			<blockquote>「${review.quote}」</blockquote>
			<div class="voice-meta">
				<span>${review.name}</span>
				<span>${review.product}</span>
				<span class="voice-stars" aria-label="5つ星">★★★★★</span>
			</div>
		</div>
	</article>
`).join("");

faqList.innerHTML = faqs.map((faq, index) => `
	<article class="faq-item">
		<button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}" id="faq-question-${index}">
			<span class="faq-question-text"><strong>Q.</strong>${faq.question}</span>
			<span class="faq-toggle" aria-hidden="true"></span>
		</button>
		<div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}" aria-hidden="true" inert>
			<div class="faq-answer-inner">
				<div class="faq-answer-content"><strong class="faq-answer-label">A.</strong><p>${faq.answer}</p></div>
			</div>
		</div>
	</article>
`).join("");

faqList.addEventListener("click", (event) => {
	const button = event.target.closest(".faq-question");

	if (!button) return;

	const isExpanded = button.getAttribute("aria-expanded") === "true";
	const answer = document.getElementById(button.getAttribute("aria-controls"));

	button.setAttribute("aria-expanded", String(!isExpanded));
	answer.classList.toggle("is-open", !isExpanded);
	answer.setAttribute("aria-hidden", String(isExpanded));
	answer.inert = isExpanded;
});
