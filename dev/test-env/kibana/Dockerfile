FROM docker.elastic.co/kibana/kibana:9.3.5

COPY ./plugins/elastalertKibanaPlugin-9.3.5.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.3.5.zip
