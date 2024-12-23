class BlogGeneratorController < ApplicationController
  require 'openai'

  def generate
    api_key = params[:apiKey]
    keyword = params[:keyword]
    length = params[:length] || 'medium' # デフォルトは中
    tone = params[:tone] || 'casual' # デフォルトはカジュアル

    # OpenAIクライアントの設定
    client = OpenAI::Client.new(access_token: api_key)

    # プロンプトを生成
    prompt = generate_prompt(keyword, length, tone)


    begin
      # OpenAI APIを呼び出し
      response = client.chat.completions.create(
        model: "gpt-3.5-turbo", # モデルを指定 (gpt-4も可)
        messages: [{ role: "user", content: prompt }]
      )

      content = response.choices[0].message.content

      render json: { content: content }
    rescue OpenAI::Error => e
      render json: { error: e.message }, status: :bad_request
    end

  end

  private

  def generate_prompt(keyword, length, tone)
    length_modifier = case length
                      when 'small' then '短い'
                      when 'large' then '長い'
                      else '適切な長さの'
                      end

    "キーワード: #{keyword} をもとに、#{length_modifier}#{tone}なトーンのブログ記事を書いてください。"
  end
end
