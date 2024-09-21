module QuestionsHelper
  def select_options
    Question.type_questions.keys.map do |key|
      [Question.humanize_name_enum(:type_question, key), key]
    end
  end

  def humanize_type_question
    Question.humanize_name_enum(:type_question, enum_name)
  end
end
