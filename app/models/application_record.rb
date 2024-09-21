class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def self.humanize_name_enum(enum_name, enum_value)
    I18n.t("activerecord.attributes.#{model_name.i18n_key}.#{enum_name.to_s.pluralize}.#{enum_value}")
  end
end
