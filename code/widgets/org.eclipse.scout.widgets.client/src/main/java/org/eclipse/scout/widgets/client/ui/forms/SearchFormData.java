/*******************************************************************************
 * Copyright (c) 2018 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 ******************************************************************************/
package org.eclipse.scout.widgets.client.ui.forms;

import java.util.Date;
import java.util.Set;

import javax.annotation.Generated;

import org.eclipse.scout.rt.shared.data.form.AbstractFormData;
import org.eclipse.scout.rt.shared.data.form.fields.AbstractValueFieldData;

/**
 * <b>NOTE:</b><br>
 * This class is auto generated by the Scout SDK. No manual modifications recommended.
 */
@Generated(value = "org.eclipse.scout.widgets.client.ui.forms.SearchForm", comments = "This class is auto generated by the Scout SDK. No manual modifications recommended.")
public class SearchFormData extends AbstractFormData {

  private static final long serialVersionUID = 1L;

  public Boolean getBoolean() {
    return getFieldByClass(Boolean.class);
  }

  public DateFrom getDateFrom() {
    return getFieldByClass(DateFrom.class);
  }

  public DateTo getDateTo() {
    return getFieldByClass(DateTo.class);
  }

  public IntegerFrom getIntegerFrom() {
    return getFieldByClass(IntegerFrom.class);
  }

  public IntegerTo getIntegerTo() {
    return getFieldByClass(IntegerTo.class);
  }

  public LongFrom getLongFrom() {
    return getFieldByClass(LongFrom.class);
  }

  public LongTo getLongTo() {
    return getFieldByClass(LongTo.class);
  }

  public Smart getSmart() {
    return getFieldByClass(Smart.class);
  }

  public String getString() {
    return getFieldByClass(String.class);
  }

  public static class Boolean extends AbstractValueFieldData<java.lang.Boolean> {

    private static final long serialVersionUID = 1L;
  }

  public static class DateFrom extends AbstractValueFieldData<Date> {

    private static final long serialVersionUID = 1L;
  }

  public static class DateTo extends AbstractValueFieldData<Date> {

    private static final long serialVersionUID = 1L;
  }

  public static class IntegerFrom extends AbstractValueFieldData<Integer> {

    private static final long serialVersionUID = 1L;
  }

  public static class IntegerTo extends AbstractValueFieldData<Integer> {

    private static final long serialVersionUID = 1L;
  }

  public static class LongFrom extends AbstractValueFieldData<Long> {

    private static final long serialVersionUID = 1L;
  }

  public static class LongTo extends AbstractValueFieldData<Long> {

    private static final long serialVersionUID = 1L;
  }

  public static class Smart extends AbstractValueFieldData<Set<Long>> {

    private static final long serialVersionUID = 1L;
  }

  public static class String extends AbstractValueFieldData<java.lang.String> {

    private static final long serialVersionUID = 1L;
  }
}
