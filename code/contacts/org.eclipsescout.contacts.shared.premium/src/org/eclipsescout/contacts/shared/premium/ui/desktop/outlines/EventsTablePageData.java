/**
 * 
 */
package org.eclipsescout.contacts.shared.premium.ui.desktop.outlines;

import java.util.Date;

import javax.annotation.Generated;

import org.eclipse.scout.rt.shared.data.basic.table.AbstractTableRowData;
import org.eclipse.scout.rt.shared.data.page.AbstractTablePageData;

/**
 * <b>NOTE:</b><br>
 * This class is auto generated by the Scout SDK. No manual modifications recommended.
 * 
 * @generated
 */
@Generated(value = "org.eclipse.scout.sdk.workspace.dto.pagedata.PageDataDtoUpdateOperation", comments = "This class is auto generated by the Scout SDK. No manual modifications recommended.")
public class EventsTablePageData extends AbstractTablePageData {

  private static final long serialVersionUID = 1L;

  public EventsTablePageData() {
  }

  @Override
  public EventsTableRowData addRow() {
    return (EventsTableRowData) super.addRow();
  }

  @Override
  public EventsTableRowData addRow(int rowState) {
    return (EventsTableRowData) super.addRow(rowState);
  }

  @Override
  public EventsTableRowData createRow() {
    return new EventsTableRowData();
  }

  @Override
  public Class<? extends AbstractTableRowData> getRowType() {
    return EventsTableRowData.class;
  }

  @Override
  public EventsTableRowData[] getRows() {
    return (EventsTableRowData[]) super.getRows();
  }

  @Override
  public EventsTableRowData rowAt(int index) {
    return (EventsTableRowData) super.rowAt(index);
  }

  public void setRows(EventsTableRowData[] rows) {
    super.setRows(rows);
  }

  public static class EventsTableRowData extends AbstractTableRowData {

    private static final long serialVersionUID = 1L;
    public static final String eventId = "eventId";
    public static final String title = "title";
    public static final String starts = "starts";
    public static final String ends = "ends";
    public static final String city = "city";
    public static final String country = "country";
    public static final String homepage = "homepage";
    public static final String participants = "participants";
    private String m_eventId;
    private String m_title;
    private Date m_starts;
    private Date m_ends;
    private String m_city;
    private String m_country;
    private String m_homepage;
    private Integer m_participants;

    public EventsTableRowData() {
    }

    /**
     * @return the EventId
     */
    public String getEventId() {
      return m_eventId;
    }

    /**
     * @param eventId
     *          the EventId to set
     */
    public void setEventId(String eventId) {
      m_eventId = eventId;
    }

    /**
     * @return the Title
     */
    public String getTitle() {
      return m_title;
    }

    /**
     * @param title
     *          the Title to set
     */
    public void setTitle(String title) {
      m_title = title;
    }

    /**
     * @return the Starts
     */
    public Date getStarts() {
      return m_starts;
    }

    /**
     * @param starts
     *          the Starts to set
     */
    public void setStarts(Date starts) {
      m_starts = starts;
    }

    /**
     * @return the Ends
     */
    public Date getEnds() {
      return m_ends;
    }

    /**
     * @param ends
     *          the Ends to set
     */
    public void setEnds(Date ends) {
      m_ends = ends;
    }

    /**
     * @return the City
     */
    public String getCity() {
      return m_city;
    }

    /**
     * @param city
     *          the City to set
     */
    public void setCity(String city) {
      m_city = city;
    }

    /**
     * @return the Country
     */
    public String getCountry() {
      return m_country;
    }

    /**
     * @param country
     *          the Country to set
     */
    public void setCountry(String country) {
      m_country = country;
    }

    /**
     * @return the Homepage
     */
    public String getHomepage() {
      return m_homepage;
    }

    /**
     * @param homepage
     *          the Homepage to set
     */
    public void setHomepage(String homepage) {
      m_homepage = homepage;
    }

    /**
     * @return the Participants
     */
    public Integer getParticipants() {
      return m_participants;
    }

    /**
     * @param participants
     *          the Participants to set
     */
    public void setParticipants(Integer participants) {
      m_participants = participants;
    }
  }
}