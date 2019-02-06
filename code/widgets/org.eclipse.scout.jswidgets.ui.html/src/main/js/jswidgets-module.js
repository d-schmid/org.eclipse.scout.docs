/*!
 * Eclipse Scout JS Widgets
 * https://eclipse.org/scout/
 *
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * Released under the Eclipse Public License v1.0
 * http://www.eclipse.org/legal/epl-v10.html
 */
(function(jswidgets, scout, $, undefined) {
  __include("jswidgets/App.js");
  __include("jswidgets/objectFactories.js");
  __include("jswidgets/accordion/AccordionForm.js");
  __include("jswidgets/accordion/CollapseStyleLookupCall.js");
  __include("jswidgets/action/ActionPropertiesBox.js");
  __include("jswidgets/action/ActionStyleLookupCall.js");
  __include("jswidgets/button/ButtonForm.js");
  __include("jswidgets/button/ButtonDisplayStyleLookupCall.js");
  __include("jswidgets/carousel/CarouselForm.js");
  __include("jswidgets/common/ConfigurationBox.js");
  __include("jswidgets/common/EventsTab.js");
  __include("jswidgets/common/FormFieldLookupCall.js");
  __include("jswidgets/common/IconIdLookupCall.js");
  __include("jswidgets/common/WidgetActionsBox.js");
  __include("jswidgets/checkboxfield/CheckBoxFieldForm.js");
  __include("jswidgets/desktop/Desktop.js");
  __include("jswidgets/desktop/DisplayParentLookupCall.js");
  __include("jswidgets/form/FormDisplayHintLookupCall.js");
  __include("jswidgets/form/FormForm.js");
  __include("jswidgets/form/LifecycleForm.js");
  __include("jswidgets/formfield/FormFieldPropertiesBox.js");
  __include("jswidgets/formfield/LabelPositionLookupCall.js");
  __include("jswidgets/formfield/FormFieldTypeLookupCall.js");
  __include("jswidgets/formfield/LabelWidthInPixelLookupCall.js");
  __include("jswidgets/formfield/DisabledStyleLookupCall.js");
  __include("jswidgets/formfield/FieldStyleLookupCall.js");
  __include("jswidgets/formfield/StatusSeverityLookupCall.js");
  __include("jswidgets/formfield/StatusPositionLookupCall.js");
  __include("jswidgets/valuefield/ClearableStyleLookupCall.js");
  __include("jswidgets/valuefield/ValueFieldPropertiesBox.js");
  __include("jswidgets/custom/CustomFieldForm.js");
  __include("jswidgets/custom/WatchField.js");
  __include("jswidgets/custom/WatchFieldLayout.js");
  __include("jswidgets/datefield/DateFieldForm.js");
  __include("jswidgets/desktop/WidgetsOutline.js");
  __include("jswidgets/desktop/WidgetsOutlineOverview.js");
  __include("jswidgets/filechooser/FileChooserForm.js");
  __include("jswidgets/filechooserbutton/FileChooserButtonForm.js");
  __include("jswidgets/filechooserfield/FileChooserFieldForm.js");
  __include("jswidgets/groupbox/GroupBoxAddFieldBox.js");
  __include("jswidgets/groupbox/GroupBoxDeleteFieldBox.js");
  __include("jswidgets/groupbox/BorderDecorationLookupCall.js");
  __include("jswidgets/groupbox/GroupBoxForm.js");
  __include("jswidgets/groupbox/GroupBoxPropertiesBox.js");
  __include("jswidgets/labelfield/LabelFieldForm.js");
  __include("jswidgets/logicalgrid/GridDataBox.js");
  __include("jswidgets/logicalgrid/LogicalGridForm.js");
  __include("jswidgets/logicalgrid/LogicalGridLayoutConfigBox.js");
  __include("jswidgets/logicalgrid/LogicalGridLookupCall.js");
  __include("jswidgets/lookup/LocaleLookupCall.js");
  __include("jswidgets/lookup/SalutationLookupCall.js");
  __include("jswidgets/lookup/RainbowLookupCall.js");
  __include("jswidgets/lookup/LookupCallLookupCall.js");
  __include("jswidgets/listbox/ListBoxForm.js");
  __include("jswidgets/menubar/MenuBarForm.js");
  __include("jswidgets/menubar/MenuItemLookupCall.js");
  __include("jswidgets/numberfield/NumberFieldForm.js");
  __include("jswidgets/smartfield/SmartFieldForm.js");
  __include("jswidgets/smartfield/SmartFieldPropertiesBox.js");
  __include("jswidgets/smartfield/SmartFieldDisplayStyleLookupCall.js");
  __include("jswidgets/smartfield/multiline/MultilineSmartFieldForm.js");
  __include("jswidgets/smartfield/multiline/MultilinePersonLookupCall.js");
  __include("jswidgets/smartfield/table/LocaleTableLookupCall.js");
  __include("jswidgets/smartfield/table/TableSmartFieldForm.js");
  __include("jswidgets/smartfield/tree/TreeSmartFieldForm.js");
  __include("jswidgets/smartfield/tree/TreeSmartFieldPropertiesBox.js");
  __include("jswidgets/smartfield/tree/WorldLookupCall.js");
  __include("jswidgets/proposalfield/ProposalFieldForm.js");
  __include("jswidgets/proposalfield/ProposalFieldPropertiesBox.js");
  __include("jswidgets/radiobuttongroup/RadioButtonGroupForm.js");
  __include("jswidgets/rest/RestForm.js");
  __include("jswidgets/sequencebox/SequenceBoxForm.js");
  __include("jswidgets/stringfield/StringFieldForm.js");
  __include("jswidgets/stringfield/StringFormatLookupCall.js");
  __include("jswidgets/style/icons.js");
  __include("jswidgets/tabbox/DynamicTab.js");
  __include("jswidgets/tabbox/TabBoxAddTabItemBox.js");
  __include("jswidgets/tabbox/TabBoxDeleteTabItemBox.js");
  __include("jswidgets/tabbox/TabBoxForm.js");
  __include('jswidgets/tabbox/TabBoxProperties.js');
  __include('jswidgets/tabbox/TabItemLookupCall.js');
  __include('jswidgets/tabbox/TabItemProperties.js');
  __include("jswidgets/table/TableForm.js");
  __include("jswidgets/table/TablePropertiesBox.js");
  __include("jswidgets/table/ColumnLookupCall.js");
  __include("jswidgets/table/ColumnPropertiesBox.js");
  __include("jswidgets/table/NumberColumnPropertiesBox.js");
  __include("jswidgets/table/DateColumnPropertiesBox.js");
  __include("jswidgets/table/BackgroundEffectLookupCall.js");
  __include("jswidgets/table/editable/EditableTableForm.js");
  __include("jswidgets/table/hierarchical/HierarchicalTableForm.js");
  __include("jswidgets/table/hierarchical/HierarchicalTablePropertiesBox.js");
  __include("jswidgets/table/hierarchical/HierarchicalStyleLookupCall.js");
  __include("jswidgets/tagfield/TagFieldForm.js");
  __include("jswidgets/tagfield/TagLookupCall.js");
  __include("jswidgets/tilegrid/ColorSchemeLookupCall.js");
  __include("jswidgets/tilegrid/CustomTile.js");
  __include("jswidgets/tilegrid/CustomTileFilter.js");
  __include("jswidgets/tilegrid/TileGridForm.js");
  __include("jswidgets/tilegrid/TileGridLayoutConfigBox.js");
  __include("jswidgets/tilegrid/TileTypeLookupCall.js");
  __include("jswidgets/tilegrid/VirtualTileGridForm.js");
  __include("jswidgets/tileaccordion/TileAccordionForm.js");
  __include("jswidgets/tileaccordion/GroupLookupCall.js");
  __include("jswidgets/table/CheckableStyleLookupCall.js");
  __include("jswidgets/table/GroupingStyleLookupCall.js");
  __include("jswidgets/WidgetsRoute.js");
}(window.jswidgets = window.jswidgets || {}, scout, jQuery));
