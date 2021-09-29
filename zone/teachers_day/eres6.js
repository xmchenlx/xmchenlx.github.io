var qalistJson = []
			function generateQAForm(rndCount, maxNumber) {
				let qaListIndex = []
				let fori = 0
				let forj = 0
				if (rndCount > maxNumber) {
					rndCount = maxNumber
				}
				while (fori < rndCount) {
					let currentRndIndex = Math.floor(Math.random() * maxNumber)
					let flagRepeat = false
					for (let forj = 0; forj < qaListIndex.length; forj++) {
						if (qaListIndex[forj] == currentRndIndex) {
							flagRepeat = true
							break
						}
					}
					if (!flagRepeat) {
						qaListIndex.push(currentRndIndex)
						fori++
					}
				}
				console.log(qaListIndex)
				return qaListIndex
			}

			function writeQAForm(qaListIndex, isShowRightOpstion) {
				// console.log(qaListIndex)
				document.getElementById('quest').innerHTML = ''
				let ress = ''
				for (let i in qaListIndex) {
					let currentQuestion = qalistJson[qaListIndex[i]]
					ress += `
						                 <h3>${i}）、<span style="color:gray;padding-right:4px;">[${
						currentQuestion.type
					}]</span>
						                             <span id="q${currentQuestion['#']}">
						                                 ${currentQuestion.question.replaceAll(
																'$',
																'__________'
															)}
						                                 </span></h3>
						                 <button onclick="showAns(${
												currentQuestion['#']
											})">查看答案</button>
			`
				}
				$('#quest').html(ress)
			}
			function showAns(i) {
				let currentQuestion = qalistJson[i - 1]
				let fullStr = `
						                                 ${currentQuestion.question}
						                                 `
				let answerArray = currentQuestion.ro
				for (let a in answerArray) {
					fullStr = fullStr.replace(
						'$',
						`<span id='rightAnswer'>${answerArray[a]}</span>`
					)
				}
				console.log(i, fullStr)
				$(`#q${i}`).html(fullStr)
			}
			// getData()
			function init() {
				new Promise((resolve, reject) => {
					$.ajax({
						url: './jz.json',
						type: 'GET',
						dataType: 'json',
						success: (res) => {
							$('#loadDataDate').text(
								`数据已加载。维护日期为${res.date}。`
							)
							qalistJson = res.data
							console.log('qalistJson', qalistJson)
							var qalist = generateQAForm(15, qalistJson.length)
							writeQAForm(qalist, false)
							resolve(res.data)
						},
						error: (err) => {
							console.log(err)
							$('#loadDataDate').text(
								`加载数据失败。原因：Promise对象发生错误`
							)
							reject([])
						},
					})
				}).then((res) => {})
			}
			init()