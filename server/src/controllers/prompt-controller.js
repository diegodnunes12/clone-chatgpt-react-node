const openai = require("../config/openai")
const inputPrompt = require("../models/input-prompt")

module.exports = {
    async sendText(req, res) {
        
        const openaiApi = openai.configuration()
        const inputModel = new inputPrompt(req.body)

        try {
            const response = await openaiApi.createCompletion(
                openia.textCompletion(inputModel)
            )

            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            console.log("error")
            return res.status(200).json({
                sucess: true,
                data: "olá Diego"
            })
            /* return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : "there was an inssue on the server"
            }) */
        }
    }
}