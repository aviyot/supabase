import { LogData } from './Events.types'
import { jsonSyntaxHighlight, SelectionDetailedTimestampRow } from './EventsFormatters'

const LogsDivider = () => {
  return (
    <div className="h-px w-full bg-panel-border-interior-light dark:bg-panel-border-interior-dark" />
  )
}

export const SelectedRealtimeEventPanel = ({ log }: { log: LogData }) => {
  return (
    <>
      <div className="px-8">
        <span className="col-span-4 text-sm text-scale-900">Event message</span>

        <div className="text-wrap mt-2 overflow-x-auto whitespace-pre-wrap font-mono text-xs text-scale-1200">
          {log.event_message}
        </div>
      </div>
      <LogsDivider />
      <div className="px-8 space-y-2">
        <SelectionDetailedTimestampRow value={log.timestamp} />
      </div>
      <LogsDivider />
      <div className="px-8">
        <h3 className="mb-4 text-lg text-scale-1200">Metadata</h3>
        <pre className="syntax-highlight overflow-x-auto text-sm">
          <div
            className="text-wrap"
            dangerouslySetInnerHTML={{
              __html: log.metadata ? jsonSyntaxHighlight(log.metadata) : '',
            }}
          />
        </pre>
      </div>
    </>
  )
}
